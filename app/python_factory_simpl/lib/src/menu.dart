import 'dart:async';
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

import 'bottom.dart';

enum _MenuOptions {
  navigationDelegate,
  navigationMore,
}

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
                    });
                break;
            }
          },
          itemBuilder: (context) => [
            PopupMenuItem<_MenuOptions>(
              value: _MenuOptions.navigationDelegate,
              child: Column(children: [
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Row(children: [
                    Container(
                        margin: const EdgeInsets.only(right: 20.0),
                        child: const Icon(Icons.phonelink_erase_outlined,
                            color: Colors.black)),
                    const Text('Erase All Data')
                  ]),
                ),
              ]),
            ),
            PopupMenuItem<_MenuOptions>(
              value: _MenuOptions.navigationMore,
              child: Column(children: [
                Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Row(children: [
                      Container(
                          margin: const EdgeInsets.only(right: 20.0),
                          child: const Icon(Icons.more_horiz,
                              color: Colors.black)),
                      const Text('Load More')
                    ])),
              ]),
            ),
            PopupMenuItem<_MenuOptions>(
                child: Column(children: const [
                  Padding(
                      padding: EdgeInsets.all(8.0),
                      child: Text('Version 1.0.0'))
                ])),
          ],
        );
      },
    );
  }
}
