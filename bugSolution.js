```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let cleanup = false;
    const intervalId = setInterval(() => {
      if (!cleanup) {
        console.log('Count:', count);
      }
    }, 1000);

    return () => {
      cleanup = true;
      clearInterval(intervalId);
      console.log('Component unmounted');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```