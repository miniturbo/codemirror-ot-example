import CodeMirror from 'codemirror';
import Socket from 'socket.io-client';
import { SocketIOAdapter, CodeMirrorAdapter, EditorClient } from 'ot';

import 'codemirror/mode/gfm/gfm';

const editor = new CodeMirror(document.getElementById('editor'), {
  mode: 'gfm',
  lineWrapping: true,
  lineNumbers: true
});

const socket = new Socket();

socket.on('doc', (obj) => {
  const serverAdapter = new SocketIOAdapter(socket);
  const editorAdapter = new CodeMirrorAdapter(editor);
  const editorClient  = new EditorClient(obj.revision, obj.clients, serverAdapter, editorAdapter);
});
