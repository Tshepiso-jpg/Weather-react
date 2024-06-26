<head>
<script type="text/javascript">
  // This is a CodeSandbox injection script that's used to
  // add navigation and inspector functionality to the preview
  (function () {
    var script = document.createElement("script");
    script.src = "https://codesandbox.io/p/preview-protocol.js";
    script.defer = true;
    script.async = true;
    (document.body || document.documentElement).appendChild(script);
  })();

  const isIFramePreview = window.top !== window.self;

  // Only run this script in editor context
  if (isIFramePreview) {
    // This script is used to enable Chrome DevTools functionality
    (function () {
      var script = document.createElement("script");
      script.src =
        "https://codesandbox.io/p/chrome-devtool/protocol/index.js";

      script.onload = () => {
        const devtoolProtocol = window.chobitsu;
        if (devtoolProtocol) {
          window.addEventListener("message", (event) => {
            const { type, data } = event.data;

            if (type === "FROM_DEVTOOL") {
              devtoolProtocol.sendRawMessage(data);
            }
          });

          devtoolProtocol.setOnMessage((data) => {
            if (data.includes('"id":"tmp')) {
              return;
            }

            window.parent.postMessage({ type: "TO_DEVTOOL", data }, "*");
          });

          devtoolProtocol.sendRawMessage(
            `{"id":5,"method":"Runtime.enable","params":{}}`
          );
        }        
      }

      (document.head || document.documentElement).prepend(script);
    })();
  }

  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined") {
    let nextID = 0;
    let hook = (__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
      renderers: new Map(),
      supportsFiber: true,
      inject: (renderer) => {
        const id = nextID++;
        hook.renderers.set(id, renderer);
        return id;
      },
      onScheduleFiberRoot() {},
      onCommitFiberRoot() {},
      onCommitFiberUnmount() {},
    });
  }

  document.currentScript.remove();
</script>
  <script type="module">
import RefreshRuntime from "/@react-refresh"
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true
</script>

  <script type="module" src="/@vite/client"></script>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="theme-color" content="#000000">
	<!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    -->
	
	
	<!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
	<title>React App</title>
</head>

<body>
	<noscript>
		You need to enable JavaScript to run this app.
	</noscript>
	<div id="root"></div>
	<!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->


<script type="module" src="/src/index.jsx?t=1712075155005"></script></body>