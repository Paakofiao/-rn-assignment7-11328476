![photo_2024-07-09_19-52-07](https://github.com/Paakofiao/-rn-assignment7-11328476/assets/151411212/8ac0b988-36bc-4760-9624-672016f6670a)

![photo_2024-07-09_19-52-20](https://github.com/Paakofiao/-rn-assignment7-11328476/assets/151411212/3e3dc4d6-7a04-437e-a2ae-a78c271fc688)


![photo_2024-07-09_19-52-34](https://github.com/Paakofiao/-rn-assignment7-11328476/assets/151411212/dd4232c6-6806-4cdc-839a-b7369bddd98b)

![photo_2024-07-09_19-52-48](https://github.com/Paakofiao/-rn-assignment7-11328476/assets/151411212/1c259505-9273-455b-9a42-7b3c6cc69ac5)


![photo_2024-07-09_19-52-34](https://github.com/Paakofiao/-rn-assignment7-11328476/assets/151411212/b47ffd7e-ee32-4823-90f4-387acfdca81b)

![photo_2024-07-09_19-52-26](https://github.com/Paakofiao/-rn-assignment7-11328476/assets/151411212/3ddac839-eca7-4170-ba06-e3b179a924a2)




## API Integration
Data Fetching: Utilized axios to fetch products from a remote API (https://fakestoreapi.com/products) and handled the asynchronous operation with useEffect to fetch data on component mount.
Error Handling: Implemented a try-catch block to handle potential errors during the API call, ensuring the app remains stable even if the API request fails.

## Layout and Styling
SafeAreaView: Used SafeAreaView to ensure that the UI elements are displayed within the safe area boundaries of the device, providing a better user experience across different devices.
Flexbox Layout: Designed the layout using flexbox to create a responsive and adaptable interface.
FlatList: Employed FlatList for rendering the list of products efficiently, enabling smooth scrolling and handling large data sets.

## Interactivity
TouchableOpacity: Used TouchableOpacity for interactive elements such as menu toggle, search, checkout, and add-to-cart, providing a responsive and accessible touch experience.
Add to Cart: Enabled users to add products to the cart with a simple tap, updating the cart state dynamically.

## Context and State Management
Context API: Used CartContext to manage the shopping cart state globally, enabling easy access and updates to the cart from any component.
State Management: Employed useState to manage the products' state locally within the Home component.
