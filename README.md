# React useEffect Hook Unexpected Behavior

This repository demonstrates an uncommon issue with React's `useEffect` hook where it runs on every render, despite specifying dependencies.  The problem lies in the interplay between the effect's logic and the return cleanup function.  The solution involves carefully managing the state and the effect's dependency array.

## Problem

The provided `bug.js` file contains a component that uses `useEffect` to log the count. Despite including `count` in the dependency array, the effect still runs on every render, and the cleanup function is not consistently invoked, possibly leading to memory problems if it were doing more substantial work.

## Solution

The `bugSolution.js` demonstrates a corrected approach.  Proper management of the effect's logic and the dependency array ensures that the effect only runs when `count` actually changes.