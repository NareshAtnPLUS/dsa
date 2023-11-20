const { MaxPriorityQueue } = require('datastructures-js');

class TwitterDesign {
    time = 0;
    tweetMap = {};
    followMap = {};
    constructor() {}
    getNewsFeed(userId) {
        const result = [];
        const maxHeap = new MaxPriorityQueue();
        const followeeList = this.followMap[userId] || new Set();
        followeeList.add(userId);
        this.followMap[userId] = followeeList;

        for (let followeeId of this.followMap[userId]) {
            if (followeeId in this.tweetMap) {
                const index = this.tweetMap[followeeId].length - 1;
                const tweetList = this.tweetMap[followeeId];
                const { time, tweetId } = tweetList[index];
                maxHeap.enqueue(
                    { time, tweetId, followeeId, index: index - 1 },
                    time
                );
            }
        }
        while (maxHeap.size() > 0 && result.length < 10) {
            const { time, tweetId, followeeId, index } = maxHeap.dequeue();
            result.push(tweetId);

            if (index >= 0) {
                const tweetList = this.tweetMap[followeeId];
                const { time: prevTime, tweetId: prevTweetId } =
                    tweetList[index];
                maxHeap.enqueue(
                    {
                        time: prevTime,
                        tweetId: prevTweetId,
                        followeeId,
                        index: index - 1,
                    },
                    prevTime
                );
            }
        }
        return result;
    }
    postTweet(userId, tweetId) {
        const userTweets = this.tweetMap[userId] || [];
        userTweets.push({ time: this.time, tweetId });
        this.tweetMap[userId] = userTweets;
        this.time += 1;
    }
    unfollow(followerId, followeeId) {
        const followeeSet = this.followMap[followerId];
        if (followeeSet.has(followeeId)) {
            console.log(followeeSet.delete(followeeId));
        }
        this.followMap[followerId] = followeeSet;
        return;
    }
    follow(followerId, followeeId) {
        const followeeSet = this.followMap[followerId] || new Set();
        followeeSet.add(followeeId);
        this.followMap[followerId] = followeeSet;
    }
}

const twitter = new TwitterDesign();
console.log(twitter.postTweet(...[1, 5]));
console.log(twitter.getNewsFeed(...[1]));
console.log(twitter.follow(...[1, 2]));
console.log(twitter.postTweet(...[2, 6]));
console.log(twitter.getNewsFeed(...[1]));
console.log(twitter.unfollow(...[1, 2]));
console.log(twitter.getNewsFeed(...[1]));
