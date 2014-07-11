SOURCEVIEW.HTML
===============
Toy application for viewing source code using SyntaxHighlighter and AngularJS.
Title, urls and files are set in the setting file or by Request Parameters.  

Parameter Form: JSON, UTF-8, URI encoded.  
```
{  
    title:<string>,  
    url:<string>,  
    exec:<string>,  
    files:[{  
        name:<string>,  
        brush:<string>,  
        title:<string>  
    }]  
}
```

To use setting file, set below as Request Parameters.

Parameter Form: JSON, UTF-8, URI encoded.  
```
{  
    url:<string>,  
    entry:<string>
}  
```
