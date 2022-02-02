import 'dart:async';
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:flutter/services.dart';
import 'package:share/share.dart';

void main() {
  runApp(
    const MaterialApp(
      home: PythonFactoryApp(),
    ),
  );
}

enum _MenuOptions {
  navigationDelegate,
  navigationMore,
  shareSite,
  exitapp,
  version
}

const links = [
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

class PythonFactoryApp extends StatefulWidget {
  const PythonFactoryApp({Key? key}) : super(key: key);

  @override
  State<PythonFactoryApp> createState() => _PythonFactoryAppState();
}

class _PythonFactoryAppState extends State<PythonFactoryApp> {
  final controller = Completer<WebViewController>();

  var loadingPercentage = 100;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        actions: [
          FutureBuilder<WebViewController>(
            future: controller.future,
            builder: (context, snapshot) {
              final WebViewController? controller = snapshot.data;
              if (snapshot.connectionState != ConnectionState.done ||
                  controller == null) {
                return Row(
                  children: const <Widget>[
                    Icon(Icons.arrow_back_ios),
                    Icon(Icons.arrow_forward_ios),
                  ],
                );
              }

              return Row(
                children: <Widget>[
                  IconButton(
                    icon: const Icon(Icons.arrow_back_ios),
                    onPressed: () async {
                      if (await controller.canGoBack()) {
                        await controller.goBack();
                      } else {
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(content: Text('No back history item')),
                        );
                        return;
                      }
                    },
                  ),
                  IconButton(
                    icon: const Icon(Icons.arrow_forward_ios),
                    onPressed: () async {
                      if (await controller.canGoForward()) {
                        await controller.goForward();
                      } else {
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(
                              content: Text('No forward history item')),
                        );
                        return;
                      }
                    },
                  ),
                  IconButton(
                    icon: const Icon(Icons.home),
                    onPressed: () async {
                      await controller.loadUrl("https://coding-insight.com");
                    },
                  ),
                ],
              );
            },
          ),
          FutureBuilder<WebViewController>(
            future: controller.future,
            builder: (context, controller) {
              return PopupMenuButton<_MenuOptions>(
                onSelected: (value) async {
                  switch (value) {
                    case _MenuOptions.navigationDelegate:
                      controller.data!.clearCache();
                      break;
                    case _MenuOptions.navigationMore:
                      showModalBottomSheet<void>(
                        context: context,
                        builder: (BuildContext context) {
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
                                      subtitle:
                                          Text(item['description'] ?? 'Error'),
                                      onTap: () {
                                        controller.data!.loadUrl(item['link'] ??
                                            "https://coding-insight.com/");
                                        Navigator.pop(context);
                                      },
                                    ),
                                  );
                                },
                              ),
                            ),
                          );
                        },
                        enableDrag: true,
                      );
                      break;
                    case _MenuOptions.shareSite:
                      Share.share(
                          'check out our site! https://coding-insight.com',
                          subject: "Wanna learn how to code?");
                      break;
                    case _MenuOptions.exitapp:
                      SystemChannels.platform
                          .invokeMethod('SystemNavigator.pop');
                      break;
                    case _MenuOptions.version:
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(
                            content: Text('Python - Factory Version 1.0.2')),
                      );
                      break;
                  }
                },
                itemBuilder: (context) => [
                  PopupMenuItem<_MenuOptions>(
                    value: _MenuOptions.navigationDelegate,
                    child: Row(
                      children: [
                        Container(
                          margin: const EdgeInsets.only(right: 20.0),
                          child: const Icon(Icons.phonelink_erase_outlined,
                              color: Colors.black),
                        ),
                        const Text('Erase All Data')
                      ],
                    ),
                  ),
                  PopupMenuItem<_MenuOptions>(
                    value: _MenuOptions.shareSite,
                    child: Row(
                      children: [
                        Container(
                          margin: const EdgeInsets.only(right: 20.0),
                          child: const Icon(Icons.share, color: Colors.black),
                        ),
                        const Text('Share')
                      ],
                    ),
                  ),
                  PopupMenuItem<_MenuOptions>(
                    value: _MenuOptions.navigationMore,
                    child: Row(
                      children: [
                        Container(
                          margin: const EdgeInsets.only(right: 20.0),
                          child:
                              const Icon(Icons.more_horiz, color: Colors.black),
                        ),
                        const Text('Load More')
                      ],
                    ),
                  ),
                  PopupMenuItem<_MenuOptions>(
                    value: _MenuOptions.exitapp,
                    child: Row(
                      children: [
                        Container(
                          margin: const EdgeInsets.only(right: 20.0),
                          child: const Icon(Icons.exit_to_app,
                              color: Colors.black),
                        ),
                        const Text('Exit app')
                      ],
                    ),
                  ),
                  const PopupMenuItem<_MenuOptions>(
                    value: _MenuOptions.version,
                    child: Text('Version 1.0.0'),
                  ),
                ],
                tooltip: "See more features",
                icon: const Icon(Icons.menu),
              );
            },
          ),
        ],
        automaticallyImplyLeading: false,
        backgroundColor: Colors.black87,
        bottomOpacity: 0,
        elevation: 0,
        excludeHeaderSemantics: true,
        title: const Text("Python-Factory", style: TextStyle(fontSize: 15)),
      ),
      body: Stack(
        children: [
          WebView(
            initialUrl: 'https://coding-insight.com/',
            allowsInlineMediaPlayback: true,
            gestureNavigationEnabled: true,
            onWebViewCreated: (webViewController) {
              controller.complete(webViewController);
            },
            onPageStarted: (url) {
              setState(() {
                loadingPercentage = 0;
              });
            },
            onProgress: (progress) {
              setState(() {
                loadingPercentage = progress;
              });
            },
            onPageFinished: (url) {
              setState(() {
                loadingPercentage = 100;
              });
            },
            javascriptMode: JavascriptMode.unrestricted,
            userAgent: "CIAV FLUTTER 1.0.2",
            backgroundColor: Colors.black,
            onWebResourceError: (webResourceError) {
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                  content: Text(
                      'Error (${webResourceError.errorCode}) - ${webResourceError.description}'),
                ),
              );
            },
            initialMediaPlaybackPolicy:
                AutoMediaPlaybackPolicy.require_user_action_for_all_media_types,
          ),
        ],
      ),
      floatingActionButton: FutureBuilder<WebViewController>(
        future: controller.future,
        builder: (context, controller) {
          return FloatingActionButton(
            child: loadingPercentage < 100
                ? const CircularProgressIndicator(
                    color: Colors.white,
                    strokeWidth: 2,
                  )
                : const Icon(Icons.replay),
            onPressed: () {
              controller.data!.reload();
            },
            isExtended: true,
            splashColor: Colors.red,
            enableFeedback: true,
          );
        },
      ),
    );
  }
}
