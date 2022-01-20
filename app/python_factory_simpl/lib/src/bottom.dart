import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class Bottom extends StatelessWidget {
  const Bottom({required this.controller, Key? key}) : super(key: key);

  final AsyncSnapshot<WebViewController> controller;

  final links = const [
    {
      "title": "Search",
      "icon": "magnify",
      "description": "Search about us in Google",
      "link": "https://cse.google.com/cse?cx=ee1853348b1a4e08b",
    },
    {
      "title": "Google",
      "icon": "google",
      "description": "Search in Google",
      "link": "https://www.google.com/",
    },
    {
      "title": "GitHub",
      "icon": "github",
      "description": "Check out our source code",
      "link": "https://github.com/HyunseungLee-Travis/Coding-Insight",
    },
    {
      "title": "YouTube",
      "icon": "youtube",
      "description": "Watch videos about Python",
      "link": "https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA",
    },
    {
      "title": "Game",
      "icon": "controller-classic",
      "description": "A game made by the developers",
      "link": "http://gaming.coding-insight.com/",
    },
    {
      "title": "Chat",
      "icon": "chat",
      "description": "Chat with the developers",
      "link": "http://chat.coding-insight.com/",
    },
    {
      "title": "Release",
      "icon": "application",
      "description": "Check the latest updates",
      "link":
          "https://github.com/HyunseungLee-Travis/Coding-Insight/releases/tag/2.0.1",
      //Version mentioned here
    },
    {
      "title": "Feedback",
      "icon": "message-alert",
      "description": "Tell us what you think",
      "link":
          "https://docs.google.com/forms/d/e/1FAIpQLSd_8WaZFf9FOanYdBil4t1PBZmzY6uRElimcbXbqVZgxghISg/viewform",
    },
    {
      "title": "Fun Videos",
      "icon": "movie",
      "description": "Watch fun videos about Python",
      "link": "https://coding-insight.com/python/korean/video.html",
    },
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

          return ListTile(
              title: Text(item["title"] ?? "Error"),
              subtitle: Text(item['description'] ?? 'Error'),
              onTap: () {
                controller.data!
                    .loadUrl(item['link'] ?? "https://coding-insight.com/");
                Navigator.pop(context);
              });
        },
      )),
    );
  }
}
