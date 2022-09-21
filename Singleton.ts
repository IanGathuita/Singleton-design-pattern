class Singleton{
    private constructor(){}

    private static _instance:Singleton;

    static getInstance():Singleton{
        if(!Singleton._instance){
            Singleton._instance = new Singleton();            
        }
        return Singleton._instance;
    }
}

//client code
let mySingletonInstance1 = Singleton.getInstance();
let mySingletonInstance2 = Singleton.getInstance();

if(mySingletonInstance1 === mySingletonInstance2){
    console.log("Singleton is working; both variables have the same instance");
}
else{
    console.log("Singleton is not working");
}