type MouseEvent = {
  x: number;
  y: number;
};
type KeyboardEvent = {
  key: string;
};
type EventMap = {click: MouseEvent, keydown: KeyboardEvent};

const on = <K extends keyof EventMap>(
  event: K,
  handler: (event: EventMap[K]) => void
) => {
  console.log("Event:", event, "=> Handler:", handler);
};


// Test the handlers with sample events
on("click", (e) => console.log("Click:", e.x, e.y));
on("keydown", (e) => console.log("Keydown:", e.key));

