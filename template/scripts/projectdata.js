// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;

rh.consts('DEFAULT_TOPIC', encodeURI("#OpMan/OpMan/Convenciones_utilizadas_en_el_manual.htm".substring(1)));
rh.consts('START_FILEPATH', encodeURI('index.html'));
rh.consts('HELP_ID', '430FAEFC-9E02-4180-9A8B-E0A4C6469235' || 'preview');
rh.consts('LNG_STOP_WORDS', ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "aceptar", "ahí", "alguna", "algunas", "alguno", "algunos", "aquí", "aún", "cada", "como", "cómo", "con", "cuál", "cualquier", "cualquiera", "cuando", "cuándo", "de", "deber", "dentro", "desde", "después", "dónde", "el", "él", "ella", "ello", "ellos", "en", "entonces", "entre", "era", "eran", "es", "esos", "esto", "estos", "forma", "hacer", "hacia", "hecho", "igual", "junto", "la", "lo", "los", "más", "necesitar", "ninguno", "no", "nosotros", "ó", "o", "otra", "otro", "otroa", "para", "pero", "poder", "por", "porque", "puede", "qué", "que", "queremos", "re", "ser", "si", "sido", "sin", "son", "soy", "sus", "también", "tan", "tener", "tiene", "todo", "Todo", "Todos", "todos", "tu", "tus", "u", "un", "una", "uno", "usado", "usando", "usar", "usted", "ustedes", "utilizando", "utilizar", "ver", "vosotros", "y", "ya", "Yo"]);
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_DIR'), "ltr");
model.publish(rh.consts('KEY_LNG'), {"Reset":"Restablecer","SearchResultsPerScreen":"Resultados de búsqueda por página","SyncToc":"SyncToc","HomeButton":"Inicio","WebSearchButton":"WebSearch","ApplyTip":"Aplicar","HighlightSearchResults":"Resaltar resultados de búsqueda","GlossaryFilterTerms":"Encontrar término","WebSearch":"WebSearch","Show":"Mostrar","EnableAndSearch":"Mostrar resultados que incluyan todas las palabras de búsqueda","ShowAll":"Mostrar todo","Next":">>","Print":"Imprimir","NoScriptErrorMsg":"Active la compatibilidad con JavaScript en el explorador para ver esta página.","PreviousLabel":"Anterior","Hide":"Ocultar","Search":"Búsqueda","Contents":"Contenido","ShowHide":"Mostrar/Ocultar","Canceled":"Cancelado","EndOfResults":"Fin de resultados de búsqueda.","Loading":"Cargando...","SidebarToggleTip":"Expandir/colapsar","ContentFilterChanged":"Se ha cambiado el filtro de contenido, vuelva a buscar","Logo":"Logotipo","Logo/Author":"Desarrollado por","JS_alert_LoadXmlFailed":"Error: no se pudo cargar el archivo xml.","SearchTitle":"Buscar","Searching":"Buscando...","Disabled Next":">>","Cancel":"Cancelar","JS_alert_InitDatabaseFailed":"Error: no se pudo inicializar la base de datos.","ResultsFoundText":"%1 resultado(s) encontrado(s) para %2","UnknownError":"Error desconocido","Seperate":"|","Index":"Índice","TopicsNotFound":"No se han encontrado temas.","SearchPageTitle":"Resultados de búsqueda","Glossary":"Glosario","Filter":"Filtrar","HideAll":"Ocultar todo","TableOfContents":"Tabla de contenido","NextLabel":"Siguiente","Disabled Prev":"<<","Back":"Atrás","SearchOptions":"Opciones de búsqueda","OpenLinkInNewTab":"Abrir en nueva ficha","Prev":"<<","ToTopTip":"Ir al principio","NavTip":"Menú","IeCompatibilityErrorMsg":"Esta página no se puede ver en Internet Explorer 8 o versiones anteriores.","IndexFilterKewords":"Encontrar palabra clave","JS_alert_InvalidExpression_1":"Las palabras que ha escrito no son una expresión válida."});
})();