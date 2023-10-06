package scenario

import (
	"context"
	"fmt"

	"github.com/isucon/isucon13/bench/isupipe"
)

// FIXME: Postした後に毎回チェックするのではなく、GetReactionsするときに整合性チェックする
// 結果整合性保証的な動きを仮にしていたとしても、競技環境からするとベンチがいつAssertionするかわからないので、それにチャレンジするモチベーションがないはず
func assertPostedReactionConsistency(
	ctx context.Context,
	client *isupipe.Client,
	livestreamId int,
	postedReactionId int,
) error {
	reactions, err := client.GetReactions(ctx, livestreamId)
	if err != nil {
		return err
	}

	for _, r := range reactions {
		if r.Id == postedReactionId {
			return nil
		}
	}

	return fmt.Errorf("投稿されたリアクション(id: %d)が取得できませんでした", postedReactionId)
}

func assertPostedLivecommentConsistency(
	ctx context.Context,
	client *isupipe.Client,
	livestreamId int,
	postedLivecommentId int,
) error {
	livecomments, err := client.GetLivecomments(ctx, livestreamId)
	if err != nil {
		return err
	}

	for _, s := range livecomments {
		if s.Id == postedLivecommentId {
			return nil
		}
	}

	return fmt.Errorf("投稿されたライブコメント(id: %d)が取得できませんでした", postedLivecommentId)
}

// もともと人気VTuberだったが、スパムにより不人気になった場合のアサーション
func assertSpamedPopularVTuber() {

}