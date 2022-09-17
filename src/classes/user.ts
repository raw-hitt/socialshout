import { NoteTwoTone, TheatersRounded } from '@material-ui/icons';
import FirebaseCon from 'firebase'
import firebase from '../database/firebaseConfig'
import { Connection } from '../database/projectConfig'

export default class user {


    //user data
    public userData: Array<any> = [];

    //check if user exists

    async checkUser(userName: string, email: string): Promise<boolean> {
        try {
            var checkEmail = await Connection().GetDataWithCondition("users", "email", "==", "'" + email + "'", 1);
            var checkUsername = await Connection().GetDataWithCondition("users", "userName", "==", "'" + userName + "'", 1);
            this.userData.push(checkEmail);
            

            if (checkEmail.length > 0 || checkUsername.length > 0) {
                return false
            }
            else {
                return true;
            }
            return false;
        }
        catch {
            return false
        }
    }


    //you have to checek token
    //register
    async userRegister(username: string, password: string, email: string): Promise<boolean> {

        //console.log('-------------->>',username,password,email);
        var data: boolean = false;
        try {

            await firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {

                const userDetails = {
                    username: username,
                    email: email,
                    password: password,
                    dpLink:'https://freepikpsd.com/wp-content/uploads/2019/10/emojis-changuitos-png-2-Transparent-Images.png',
                    status:'Write Something About You'
                }

                Connection().AddData("users", userDetails);

                data = true;

            }).catch(function (error) {

                var _error = error;
                console.log(_error)
                data = false;
            })



        }
        catch (error) {
            //console.log(error)
            data = false;
        }
        return data;
    }

    //you have to checek token
    async userLogin(username: string, password: string): Promise<boolean> {

        var result: boolean = false;


         await firebase.auth().signInWithEmailAndPassword(username, password)
            .then(data => {

                const logs = {
                    'username': username,
                    'activity': 'loogged in',
                    'time': Date()

                }


                Connection().AddData("logs", logs);
                result = true;
                //console.log('--',result)

            })
            .catch(function (error) {

                var _error = error;
                console.log(_error)
                result = false;
            })



        return result;
    }

    userPosts(id: string, limit?: number): Array<any> {

        var data: Array<any> = [];
        try {
            return data;
        }
        catch {
            return data;
        }
    }

    userNotifications(id: string, limit?: number): Array<any> {

        var data: Array<any> = [];
        try {
            return data;
        }
        catch {
            return data;
        }
    }

    async userProfile(email: string): Promise<Array<any>> {

        var data: Array<any> = [];
        try {
            data = this.userData;
            return data;
        }
        catch {
            return data;
        }
    }
}