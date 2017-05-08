$(function(){
	
	/**** YOUTUBE ****/
	
	YT_key = "AIzaSyCogApDMQWoGiYzgACToVje8pmh0vfSdQU";
	$.get("https://www.googleapis.com/youtube/v3/search",{part: "snippet", type:"video", key: YT_key, channelId: "UClu474HMt895mVxZdlIHXEA", maxResults: 10, order: "date", type: "video"}, function(data){
		
		
		for(i = 0; i< data.items.length; i++){
			video = data.items[i];
			
			title = video.snippet.title;
			thumbnail = video.snippet.thumbnails.medium.url;
			
			var video_div = jQuery("<div class='video'></div>");
			var thumb = jQuery("<div class='thumb' style='background-image: url("+thumbnail+")'></div>").appendTo(video_div);
			var span_title = jQuery("<span class='title'>"+title+"</span>").appendTo(video_div);
			
			$("section.vlog div.container div.videos").append(video_div);
		}
	});
});