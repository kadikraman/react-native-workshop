# Styling the list

In the `renderItem` method, you see references to styles like `styles.row`, `styles.sender`, `styles.message`. These styles can be defined in the bottom of the file, replacing the existing StyleSheet:

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  message: {
    fontSize: 18,
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10,
  },
});
```
Feel free to play around with the styles and make it look different. The style names and values usually match how CSS works on the web, except names are written using camel casing, e.g `backgroundColor` rather than `background-color`.
