import 'dart:async';

import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

import 'src/menu.dart';
import 'src/navigation.dart';
import 'src/web_view_stack.dart';

void main() {
  runApp(
    const MaterialApp(
      home: WebViewApp(),
    ),
  );
}

class WebViewApp extends StatefulWidget {
  const WebViewApp({Key? key}) : super(key: key);

  @override
  State<WebViewApp> createState() => _WebViewAppState();
}

class _WebViewAppState extends State<WebViewApp> {
  final controller = Completer<WebViewController>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Python-Factory-Simpl'),
        actions: [
          NavigationControls(controller: controller),
          Menu(globcontroller: controller),
        ],
      ),
      body: WebViewStack(controller: controller),
    );
  }
}
