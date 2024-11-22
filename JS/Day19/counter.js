export default function counter() {
  let count = 0

  return {
    increment: function (){
      return count += 1
    },
    decrement: function() {
        return count -= 1
    },
    getCount: function() {
      return count
    }
  }
}