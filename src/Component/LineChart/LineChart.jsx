import { LineChart as LChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

const LineChart = () => {

          const studentData = [
                    { name: "Student 1", mathMarks: 85, physicsMarks: 78, chemistryMarks: 92 },
                    { name: "Student 2", mathMarks: 78, physicsMarks: 80, chemistryMarks: 85 },
                    { name: "Student 3", mathMarks: 92, physicsMarks: 88, chemistryMarks: 76 },
                    { name: "Student 4", mathMarks: 76, physicsMarks: 70, chemistryMarks: 84 },
                    { name: "Student 5", mathMarks: 88, physicsMarks: 90, chemistryMarks: 91 },
                    { name: "Student 6", mathMarks: 95, physicsMarks: 86, chemistryMarks: 78 },
                    { name: "Student 7", mathMarks: 70, physicsMarks: 75, chemistryMarks: 80 },
                    { name: "Student 8", mathMarks: 84, physicsMarks: 92, chemistryMarks: 88 },
                    { name: "Student 9", mathMarks: 91, physicsMarks: 84, chemistryMarks: 90 },
                    { name: "Student 10", mathMarks: 79, physicsMarks: 75, chemistryMarks: 82 }
                ];
          return (
                    <div className='p-29 mx-auto'>
                          <LChart  width={1400} height={499} data={studentData}>
                              <XAxis dataKey={'name'}></XAxis>
                              <YAxis dataKey={''}></YAxis>
                              <Line dataKey="mathMarks" stroke='red'></Line>
                              <Line dataKey="physicsMarks" stroke='blue'></Line>
                              <Line dataKey="chemistryMarks" stroke='gray'></Line>
                          </LChart>    
                    </div>
          );
};

export default LineChart;