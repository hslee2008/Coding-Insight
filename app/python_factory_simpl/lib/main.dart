import 'dart:async';

import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

import 'src/menu.dart';
import 'src/navigation.dart';
import 'src/web_view_stack.dart';

void main() {
  runApp(
    const MaterialApp(
      home: PythonFactoryApp(),
    ),
  );
}

class PythonFactoryApp extends StatefulWidget {
  const PythonFactoryApp({Key? key}) : super(key: key);

  @override
  State<PythonFactoryApp> createState() => _PythonFactoryAppState();
}

class _PythonFactoryAppState extends State<PythonFactoryApp> {
  final controller = Completer<WebViewController>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Python-Factory 1.0.1', style: TextStyle(fontSize: 13)),
        actions: [
          NavigationControls(controller: controller),
          Menu(globcontroller: controller),
        ],
      ),
      body: WebViewStack(controller: controller),
    );
  }
}
