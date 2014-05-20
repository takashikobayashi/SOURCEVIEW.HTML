SOURCEVIEW.HTML
===============
Toy source code viewer using SyntaxHighlighter.  
Get files by XMLHttpRequest and insert to the viewer.  
Title, url and files are set as Request Parameters.  

Parameter Form: JSON, UTF-8, URI encoded.  
```
{  
    title:<string>,  
    url:<string>,  
    files:[{  
        name:<string>,  
        brush:<string>,  
        title:<string>  
    }]  
}
```
