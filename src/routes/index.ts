import { useRoutes } from "react-router-dom";
import { AllroutesOfLessons } from "./lessons.routes";
import { allProjectRoutes } from "./projectRoutes.routes";
import { entrypoint } from "./entrypoint.routes";

export default function AllRoutes(){
    return useRoutes([AllroutesOfLessons,allProjectRoutes,entrypoint])
}