function checkIfLoggedIn() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('User signed in')
            console.log(user)
            var photoURL = user.photoURL

            // document.getElementById('google-pic')
            //         .setAttribute('src', photoURL)
            // do logged in stuff
        //     document.getElementById('google-signin')
        //         .setAttribute('style', 'display: none; visibility: hidden')
        //     document.getElementById('signout')
        //         .setAttribute('style', 'display: inline-block; visibility: visible')
        }
        else {
            console.log('User not signed in.')
                // do not logged in stuff
            // document.getElementById('google-signin')
            //     .setAttribute('style', 'display: inline-block; visibility: visible')
            // document.getElementById('signout')
            //     .setAttribute('style', 'display: none; visibility: hidden')
        }
    })
}
window.onload = function() {
    checkIfLoggedIn()
}

function signOut() {
    firebase.auth().signOut()

    document.getElementById('displayName').innerHTML = ""

    checkIfLoggedIn()
}

function signInWithGoogle() {
    var googleAuthProvider = new firebase.auth.GoogleAuthProvider

    firebase.auth().signInWithPopup(googleAuthProvider)
        .then(function(data) {
            console.log(data)
            var photoURL = data.additionalUserInfo.profile.picture

            var idToken = data.credential.idToken
            var displayName = data.displayName

            document.getElementById('displayName').innerHTML = displayName

            checkIfLoggedIn()
        })
        .catch(function(error) {
            console.log(error)
        })
}

function signInWithEmail() {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            }
            else {
                alert(errorMessage);
            }
            console.log(error);
        });
    
    checkIfLoggedIn()

}
