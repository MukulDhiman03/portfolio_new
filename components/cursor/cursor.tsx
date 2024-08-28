import { FC } from "react";
import AnimatedCursor from "react-animated-cursor"


interface CursorProps {
    color: string
}

const Cursor: FC<CursorProps> = ({ color }) => {
    return <div>
        <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
                backgroundColor: 'white'
            }}
            outerStyle={{
                border: `1px solid ${color}`
            }}
            clickables={["a", "button", "Select", "input", ".link",]}
        />
    </div>
}

export default Cursor