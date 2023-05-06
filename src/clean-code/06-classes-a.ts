(() => {


                            type Gender = 'M' | 'F';


                            class Person {
                                constructor(
                                    public name: string,
                                    public gender: Gender,
                                    public birthdate: Date,
                                    ){}

                            }

                            const newPerson = new Person ('Raul', 'M', new Date ('1996-10-09'));

                            class User extends Person{
                                    public lastAccess: Date;
                                constructor(
                                    public email: string,
                                    public rol:   string,
                                    
                                    name:string,
                                    gender:Gender,
                                    birthdate: Date,
                                ){
                                    super(name, gender, birthdate);
                                    this.lastAccess = new Date()
                                }

                                checkCredentials(){
                                    return true;
                                }
                            }

                            class UserSettings extends User {
                                constructor(
                                    public workingDirectory: string,
                                    public lastOpenFolder: string,
                                    email: string,
                                    rol: string,
                                    name: string,
                                    gender: Gender,
                                    birthdate: Date,
                                ){
                                    super(email, rol, name, gender, birthdate)
                                }
                            }

                            const userSettings = new UserSettings(
                                'usr/home',
                                '/home',
                                'rauFabra@gmail.com',
                                'Admin',
                                'Raul',
                                'M',
                                new Date('1996-10-09')
                            )

                            console.log(userSettings)

                            





})()