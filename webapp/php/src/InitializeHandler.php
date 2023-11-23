<?php

namespace IsuPipe;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Log\LoggerInterface as Logger;
use RuntimeException;
use Slim\Exception\HttpInternalServerErrorException;

/**
 * FIXME: ポータルと足並み揃えて修正
 */
class InitializeHandler extends AbstractHandler
{
    public function __construct(
        private Logger $logger,
    ) {
    }

    public function __invoke(Request $request, Response $response): Response
    {
        try {
            $this->execCommand([__DIR__ . '/../../sql/init.sh']);
        } catch (RuntimeException $e) {
            $this->logger->warning('init.sh failed with err=' . $e->getMessage());
            throw new HttpInternalServerErrorException(
                request: $request,
                message: 'failed to initialize: ' . $e->getMessage(),
                previous: $e,
            );
        }

        return $this->jsonResponse($response, new InitializeResponse(
            advertiseLevel: 10,
            language: 'php',
        ));
    }
}