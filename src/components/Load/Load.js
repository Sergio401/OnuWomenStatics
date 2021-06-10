import React from "react";
import { useLoading, Audio, BallTriangle, Bars } from "@agney/react-loading";
//import "./styles.css";

export default function Load() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    loaderProps: {
        style: { 
            margin: 'auto',
        }
    },
    indicator: <BallTriangle width="120" />
  });

  return (
    <div className="content">
      <section {...containerProps} className="load">
        {indicatorEl} {/* renders only while loading */}
      </section>
    </div>
  );
}
