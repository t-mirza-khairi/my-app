"use client";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <h1>Template {state}</h1>
      <button onClick={() => setState(state + 1)}>Click</button> */}
      {children}
    </div>
  );
}
