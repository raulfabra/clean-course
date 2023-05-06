(() => {

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    interface UserProps {
        email: string;
        rol: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;
        constructor( {name, gender, birthdate}: PersonProps ){
            this.name = name,
            this.gender = gender,
            this.birthdate = birthdate
        }

    }

    class User extends Person{
            public lastAccess: Date;
            public email: string;
            public rol:   string;

        constructor( {email, rol, name, gender, birthdate}: UserProps ){
            super({name, gender, birthdate} );
            this.lastAccess = new Date();
            this.email = email;
            this.rol = rol;
        }

        checkCredentials(){
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string,
        lastOpenFolder: string,
        email: string,
        rol: string,
        name: string,
        gender: Gender,
        birthdate: Date,
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({workingDirectory, lastOpenFolder, email, rol, name, gender,birthdate}:SettingsProps ){

            super({email, rol, name, gender, birthdate})
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: 'usr/home',
        lastOpenFolder: '/home',
        email: 'rauFabra@gmail.com',
        rol: 'Admin',
        name: 'Raul',
        gender: 'M',
        birthdate: new Date('1996-10-09'),
})

    console.log(userSettings)

                            





})()