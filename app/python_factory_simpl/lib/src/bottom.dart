import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class Bottom extends StatelessWidget {
  Bottom({required this.controller, Key? key}) : super(key: key);

  final AsyncSnapshot<WebViewController> controller;

  final links = const [
    {
      "title": "Search",
      "description": "Search about us in Google",
      "link": "https://cse.google.com/cse?cx=ee1853348b1a4e08b",
    },
    {
      "title": "GitHub",
      "description": "Check out our source code",
      "link": "https://github.com/HyunseungLee-Travis/Coding-Insight",
    },
    {
      "title": "YouTube",
      "description": "Watch videos about Python",
      "link": "https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA",
    },
    {
      "title": "Game",
      "description": "A game made by the developers",
      "link": "http://coding-insight.com/game//",
    },
    {
      "title": "Chat",
      "description": "Chat with the developers",
      "link": "http://coding-insight.com/chat//",
    },
    {
      "title": "Feedback",
      "description": "Tell us what you think",
      "link":
          "https://docs.google.com/forms/d/e/1FAIpQLSd_8WaZFf9FOanYdBil4t1PBZmzY6uRElimcbXbqVZgxghISg/viewform",
    },
    {
      "title": "Fun Videos",
      "description": "Watch fun videos about Python",
      "link": "https://coding-insight.com/korean/python/video",
    },
  ];

  final linksIcon = [
    Icons.search,
    Icons.code,
    Icons.youtube_searched_for,
    Icons.gamepad,
    Icons.chat,
    Icons.feedback,
    Icons.switch_video,
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 600,
      color: Colors.white,
      child: Center(
        child: ListView.builder(
          itemCount: links.length,
          itemBuilder: (context, index) {
            final item = links[index];
            final icons = linksIcon[index];

            return Card(
              child: ListTile(
                leading: Icon(
                  icons,
                  size: 60.0,
                ),
                title: Text(item["title"] ?? "Error"),
                subtitle: Text(item['description'] ?? 'Error'),
                onTap: () {
                  controller.data!
                      .loadUrl(item['link'] ?? "https://coding-insight.com/");
                  Navigator.pop(context);
                },
              ),
            );
          },
        ),
      ),
    );
  }
}
