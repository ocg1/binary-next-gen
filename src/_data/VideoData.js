const binaryChannelID = 'UCATAKOpB9mWQGMYgk-Y4MTw';
const key = 'AIzaSyDM8-uF9EGwVl4litOnFGSbBzWodGVRnLU';

const dailyNewsPlaylist = 'PLVJJAiu3lRjYz1XO_yoyIRxgz5zBlQc-g';

const playlistItemApi = 'https://www.googleapis.com/youtube/v3/playlistItems';
const playlistApi = 'https://www.googleapis.com/youtube/v3/playlists';

export const getAllVideo = (playlistID = dailyNewsPlaylist, max = 50) => {
    const queryUrl = `${playlistItemApi}?part=contentDetails,snippet,status&playlistId=${playlistID}&maxResults=${max}&key=${key}`;

    return window.fetch(queryUrl)
        .then((response) => {
            return response.json();
        })
        .then(json => json.items
            .filter(vid => vid.snippet.title !== 'Private Video')
            .map(v => ({
                imgSrc: v.snippet.thumbnails.medium.url,
                title: v.snippet.title,
                videoUrl: 'https://www.youtube.com/watch?v=' + v.snippet.resourceId.videoId,
            })
        ));
};

export const getAllPlaylist = (channelID = binaryChannelID, max = 50) => {
    const query = 'part=snippet&' +
        'channelId=' + channelID + '&' +
        'maxResults=' + max + '&' +
        'key=' + key;

    return window.fetch(playlistApi + '?' + query).
        then((response) => {
            return response.json();
        }).
        then((js) => {
            return js.items.map((pl) => {
               return {
                   title: pl.snippet.title,
                   playlistId: pl.id,
               };
            });
        });
};