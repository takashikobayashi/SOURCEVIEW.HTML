SOURCEVIEW.HTML
===============
Toy source code viewer using SyntaxHighlighter.  
Get files by XMLHttpRequest and insert to the viewer.  
Title, url and files are set as Request Parameters.  


Parameter Form: JSON, UTF-8, URI encoded.  
    {
        title:&lt;string&gt;,  
        url:&lt;string>,  
        files:[{  
            name:&lt;string>,  
            brush:&lt;string>,  
            title:<<string>  
        }]  
    }
