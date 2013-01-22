/**
 * Created with JetBrains PhpStorm.
 * User: viaz
 * Date: 1/21/13
 * Time: 2:07 PM
 * To change this template use File | Settings | File Templates.
 */


function content(n,e,t)
{
    this.name = n;
    this.email = e;
    this.text = t;

    this.addToStorage =function(){
        var str= { }
        str.user = this.name,
        str.email = this.email,
        str.text = this.text
        var json = JSON.stringify(str);
        var i = localStorage.length;
        localStorage.setItem("contentStorage_"+i, json);
    }
}