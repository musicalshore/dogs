> Using React, create the basic page that lists and filters dog breeds. This is the docs for the API you will interface  with: https://dog.ceo/dog-api/documentation/. You will use the API to fetch a list of dog breeds which will be the basis of your app. By  default, your page should have a tiled view of all dog breeds returned from that API with the name of the breed overlaying the image of  the breed.
> There should be a way to filter the dog breed names based on an input on the page. When a user is typing, the tiles should automatically  show/not show based on the filter input changing. Your page should be responsive. You can choose whether to include sub-breeds into  your app or not.

- CSS Grid to layout images
- Intersection Observer API to lazily load dog images until DogTile is in the viewport
- useReducer hook to manage state of app

When the page is first rendered, a single call is made to get the list of breeds. The breeds are used to create DogTiles which defer fetching the image source until the node is in the viewport (this is only done once), so not all images are loaded immediately. DogTiles that are filtered out are destroyed, so when they are revealed again, another call is made, as reflected in the new random dog image.
