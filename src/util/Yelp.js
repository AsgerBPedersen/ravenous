
// client ID: lJC8glEszR5qfHZ1xK38mQ

const apiKey = 'NiPLF_oE7B3fa5rAuA-8b9RYMji6k6KEAhLrkPddwqUPG0BeldtxZbJPES-drSyrT9Vbyo0Px9Zwtqt1XJZBwEgXdY_ZTRUCK0OF97dFdAW1n9VahIE0N7kGjtXqW3Yx'

const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json(); 
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address,
            city: business.location.city,
            state: business.location.state_code,
            zipCode: business.location.zip_code,
            category: business.categories.title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };


export default Yelp;