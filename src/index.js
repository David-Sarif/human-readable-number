module.exports = function toReadable (number) {
let h=Math.trunc(number/100); 
let d=Math.trunc((number%100)/10);
let n=Math.trunc(number%10);
let t=number%100;

let hundred = ['',"one","two","three","four","five","six","seven","eight","nine"].map(item=>item+' hundred ');


let decade = ['','','twen','thir','for','fif','six','seven','eigh','nine']
let num=['',"one","two","three","four","five","six","seven","eight","nine"];
let teen=['','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

if (number==0)
    return 'zero';
if (number==10)
    return 'ten';
    

if (n==0&&d==1)
    return (hundred[h]+decade.map(item=>item+'ten')[d]+num[n]);

if ( h==0 && d==0 )
    return num[n];

if (d==0)
    return (hundred[h]+decade[d]+num[n]).trim();


if (t>10&&t<20){
    if (h==0){
        return teen[n];
    }
    return hundred[h]+teen[n];
}

if (h==0) 
    return (decade.map(item=>item+'ty ')[d]+num[n]).trim();
    

return (hundred[h]+decade.map(item=>item+'ty ')[d]+num[n]).trim();

}
