import { SyncLoader } from "react-spinners"

export default function LoadingPage() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "radial-gradient(circle, rgb(90, 90, 90), rgb(54, 54, 54))",
            height: "100%",
            gap: "1rem"
        }}>
            <SyncLoader 
                loading={true}
                color={"#d1d1d1"}
                size={15}
            />
        </div>
    )
}
