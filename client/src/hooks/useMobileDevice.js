import { useEffect, useState } from "react";
import { MOBILE_DEVICES_SIZE } from "../utils/app.constant";

const useMobileDevice = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_DEVICES_SIZE.NUM_768);

    const checkIsMobile = () => {
        setIsMobile(window.innerWidth < MOBILE_DEVICES_SIZE.NUM_768);
    };

    useEffect(() => {
        window.addEventListener('resize', checkIsMobile);
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return { isMobile }
}

export default useMobileDevice;