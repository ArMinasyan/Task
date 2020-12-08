const user = require('../models/Model.User')();

module.exports = (req, res, next) => {
    const { name, username, email, address_street, address_suite,
        address_city, address_zipcode, geo_lat, geo_lng, phone,
        website, company_name, company_catchPhrase, company_bs } = req.body;

    user.create({
        "name": name,
        "username": username,
        "email": email,
        "address": {
            "street": address_street,
            "suite": address_suite,
            "city": address_city,
            "zipcode": address_zipcode,
            "geo": {
                "lat": geo_lat,
                "lng": geo_lng
            }
        },
        "phone": phone,
        "website": website,
        "company": {
            "name": company_name,
            "catchPhrase": company_catchPhrase,
            "bs": company_bs
        }
    }).then(result => {
        if (result) res.status(200).json({ msg: 'Data inserted' });
        else res.status(200).json({ msg: 'There is error, try again' });
    })
}