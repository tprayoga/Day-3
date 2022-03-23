function submitData () {
        let name = document.getElementById('input-name').value
        let email = document.getElementById('input-name').value
        let phone = document.getElementById('input-name').value
        let subject = document.getElementById('input-name').value
        let message = document.getElementById('input-name').value

        console.log(name)
        console.log(name)
        console.log(name)
        console.log(name)
        console.log(name)


        if (name == '' ) {
            return alert("silahkan isi nama")
        } else if (email == '' ) {
            return alert("silahkan isikan email")
        } else if (phone == '' ) {
            return alert("silahkan isi no telepon")
        } else if(subject == '' ) {
            return alert("silahkan isi subject") 
        } else if (message == '' ) {
            return alert("silahkan tuliskan pesan anda")
        }


        let emailReciver = 'tprayoga707@gmail.com'

        let a = document.createElement ('a')

        a.href = `mailto:${emailReciver}?subject=${subject}&body=Hallo my name ${name} ${message} please call me ${phone}`

        a.click ()

        let dataObject = {
            namaLengkap : name,
            email : email,
            phone : phone,
            subject : subject,
            Komentar : message,
        }

        console.log(dataObject)
    }