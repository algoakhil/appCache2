var n = 0      ;

Ext.create('Ext.Button', {
    text: 'Click me',
    renderTo: Ext.getBody(),
    handler: function () {
        alert('Data Saved = ' + n);
    }
});


   