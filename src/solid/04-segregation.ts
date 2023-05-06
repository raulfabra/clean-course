
// Principio de segregacion de interfaz.

interface Bird { eat() : void }

interface FlyingBird { fly() : void }

interface RunningBird { run() : void }

interface SwimmerBird { swim() : void }

class Tucan implements Bird, FlyingBird{
    public fly() {}
    public eat() {}
}

class Humminbird implements Bird, FlyingBird{
    public fly() {}
    public eat() {}
}

class Ostrich implements Bird, RunningBird{
    public eat() {}
    public run() {}
}

class penguin implements Bird, SwimmerBird{
    public eat() {}
    public swim() {}
}

//Violando el principio de segregacion de interfaz.
/*
interface Bird {
    fly() : void;
    eat() : void;
    run() : void;
    swim() : void;
}

class Tucan implements Bird{
    public fly() {}
    public eat() {}
    public run() {}
    public swim() {}
}

class Humminbird implements Bird{
    public fly() {}
    public eat() {}
    public run() {}
    public swim() {}
}

class Ostrich implements Bird{
    public fly() {
        throw new Error('This ave dont flying')
    }
    public eat() {}
    public run() {}
    public swim() {}
}

class pinguin implements Bird{
    public fly() {
        throw new Error('This ave dont flying')
    }
    public eat() {}
    public run() {}
    public swim() {}
}
*/
