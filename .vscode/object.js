
//object
var student1={"chinese":70,"English":80,"Math":90,"Soci":60,"Phch":80}

//class
class student{
    constructor(_name,_chiese,_Englisg,_Math,_soci,_Phch){
        this.name=_name;
        this.chinese=_chiese;
        this.English=_Englisg;
        this.Math=_Math;
        this.soci=_soci;
        this.Phch=_Phch;
    }
    printname(){
        console.log(this.name);
    }
    avg(){
        var sum=this.chinese+this.English+this.Math+this.Phch+this.soci;
        console.log(this.name+"score avg:"+sum/5);
    }
    
}
var MD2=[];
//var s1 = new student("chen",70,80,90,60,80);
//var s2 = new student("yuchen",70,80,90,60,80);
MD2.push(new student("chen",70,80,90,60,80));
MD2.push(new student("yuchen",70,80,90,60,80));
MD2.push(new student("yao",85,86,87,89,90));

//chinese avg
var sum=0
for (let i = 0; i < MD2.length; i++) {
    sum += MD2[i].chinese;
}
var avg=sum/MD2.length;

MD2[1].printname()
MD2[1].avg();
console.log(JSON.stringify(MD2));//陣列轉成字串