import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import "../styles/Experience.css"



function Experience() {


    return ( 
        <div >
            <VerticalTimeline lineColor="black">
                <VerticalTimelineElement className="vertical-timeline-element--education" date="2015 - 2018"
                iconStyle={{background: "black", color: "#FFFFDE"}}
                icon={<SchoolIcon />}
                >
                    <h3>Senior High School</h3>
                    <p>South Tangerang 7th State High School</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education" date="2018 - 2022"
                iconStyle={{background: "black", color: "#FFFFDE"}}
                icon={<SchoolIcon />}
                >
                    <h3>Bachelor Degree</h3>
                    <p>Gunadarma University - Computer Systems</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education" date="Feb 2021 - Jun 2021"
                iconStyle={{background: "black", color: "#FFFFDE"}}
                icon={<SchoolIcon />}
                >
                    <h3>Bangkit Academy led by Google, Tokopedia, Gojek, and Traveloka</h3>
                    <p>Mobile Development Path Participant</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education" date="Aug 2021 - Feb 2022"
                iconStyle={{background: "black", color: "#FFFFDE"}}
                icon={<SchoolIcon />}
                >
                    <h3>Startup Incubation by Corporate Innovation Asia</h3>
                    <p>Independent Study</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education" date="2022 - Present"
                iconStyle={{background: "black", color: "#FFFFDE"}}
                icon={<SchoolIcon />}
                >
                    <h3>Master Degree</h3>
                    <p>Gunadarma University - Electrical engineering</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education" date="2022 - Present"
                iconStyle={{background: "#E8AA42", color: "#FFFFDE"}}
                icon={<WorkIcon />}
                >
                    <h3>Internship</h3>
                    <p>Software Engineering Intern at ICUBE by SIRCLO </p>
                </VerticalTimelineElement>



            </VerticalTimeline>
        </div>
     );
}

export default Experience;