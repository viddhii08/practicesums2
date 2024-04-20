t1 = 30;
t2 = 90;
t3 = 120;
if(t1 >= t2 && t1>=t3 ||   t2>=t1 && t2>=t3  ||    t3>=t1 && t3>=t2 ){
    console.log("hot")
}else if ( t1 <= t2 && t1<=t3 ||   t2<=t1 && t2<=t3  ||    t3<=t1 && t3<=t2){
    console.log("moderate")
}else{
    console.log("cold")
}