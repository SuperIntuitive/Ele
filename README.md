# Ele
Method to easily make html elements in Javascript

Usage goes like this

                //Container
                var container = Ele('div', {
                    id: 'myid',
                    style: {
                        width : '100%',
                        height : '100%',
                        backgroundColor : 'green',
                    },
                    data:{
                      foo:'bar',
                    }
                });
                //Left Menu
                var logo = Ele('div', {
                    class: 'my-logo',
                    style:{
                        position : 'relative',
                        top : "0px",
                        bottom : "205px",
                        width : '220px',
                        height : '280px',
                        padding : '20px',
                        overflowY: 'scroll',
                        overflowX: 'hidden',
                    },
                    appendTo:container,
                });
                //238 chars w/o tabs
                i think this is easier than
                
                var logo = document.createElement('div');
                logo.id = 'mylogo";
                logo.classList.ad('my-logo');
                logo.style.position = 'relative';
                logo.style.top = '0px';
                logo.style.bottom = '205px'
                logo.style.width = '220px';
                logo.style.height = '280px';
                logo.style.padding = '20px';
                logo.style.overflowY:'scroll';
                logo.style.overflowX:'hidden';
                container.appendChild('logo');
                //367 chars w/o tabs
                //lot of redundant chars here. 

