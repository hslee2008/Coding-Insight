import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:share/share.dart';

import 'bottom.dart';

enum _MenuOptions { navigationDelegate, navigationMore, shareSite, exitapp }

class Menu extends StatelessWidget {
  const Menu({required this.globcontroller, Key? key}) : super(key: key);

  final Completer<WebViewController> globcontroller;

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<WebViewController>(
      future: globcontroller.future,
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
                      return Bottom(controller: controller);
                    },
                    enableDrag: true,
                  );
                  break;
                case _MenuOptions.shareSite:
                  Share.share('check out our site! https://coding-insight.com',
                      subject: "Wanna learn how to code?");
                  break;
                case _MenuOptions.exitapp:
                  SystemChannels.platform.invokeMethod('SystemNavigator.pop');
                  break;
              }
            },
            itemBuilder: (context) => [
                  PopupMenuItem<_MenuOptions>(
                    value: _MenuOptions.navigationDelegate,
                    child: Row(children: [
                      Container(
                          margin: const EdgeInsets.only(right: 20.0),
                          child: const Icon(Icons.phonelink_erase_outlined,
                              color: Colors.black)),
                      const Text('Erase All Data')
                    ]),
                  ),
                  PopupMenuItem<_MenuOptions>(
                    value: _MenuOptions.shareSite,
                    child: Row(children: [
                      Container(
                          margin: const EdgeInsets.only(right: 20.0),
                          child: const Icon(Icons.share, color: Colors.black)),
                      const Text('Share')
                    ]),
                  ),
                  PopupMenuItem<_MenuOptions>(
                    value: _MenuOptions.navigationMore,
                    child: Row(children: [
                      Container(
                          margin: const EdgeInsets.only(right: 20.0),
                          child: const Icon(Icons.more_horiz,
                              color: Colors.black)),
                      const Text('Load More')
                    ]),
                  ),
                  PopupMenuItem<_MenuOptions>(
                    value: _MenuOptions.exitapp,
                    child: Row(children: [
                      Container(
                          margin: const EdgeInsets.only(right: 20.0),
                          child: const Icon(Icons.exit_to_app,
                              color: Colors.black)),
                      const Text('Exit app')
                    ]),
                  ),
                  const PopupMenuItem<_MenuOptions>(
                      child: Text('Version 1.0.0')),
                ],
            tooltip: "See more features",
            icon: const Icon(Icons.menu));
      },
    );
  }
}
