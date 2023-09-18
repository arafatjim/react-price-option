import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
          const PriceOptions = [
                      {
                        "id": 1,
                        "name": "Standard Membership",
                        
                        "description": "Access to gym facilities during standard hours.",
                        "features": [
                          "Access to cardio and strength training equipment",
                          "Group fitness classes",
                          "Locker room access",
                          "Towel service",
                          "Nutrition consultation (1/month)",
                          "Discounts on personal training sessions"
                        ],
                        "price": 49.99,
                      },
                      {
                        "id": 2,
                        "name": "Premium Membership",
                        
                        "description": "Unlimited access to gym facilities at any time.",
                        "features": [
                          "Access to cardio and strength training equipment",
                          "Group fitness classes",
                          "24/7 access",
                          "Sauna and steam room access",
                          "Personal training session (1/month)",
                          "Nutrition consultation (2/month)",
                          "Access to premium fitness equipment"
                        ],
                        "price": 79.99,
                      },
                      {
                        "id": 3,
                        "name": "Family Membership",
                        
                        "description": "Unlimited access for a family of up to 4 members.",
                        "features": [
                          "Access for 2 adults and 2 children",
                          "Access to cardio and strength training equipment",
                          "Group fitness classes",
                          "Childcare services",
                          "Family locker room access",
                          "Discounts on family personal training sessions",
                          "Access to family-friendly fitness classes"
                        ],
                        "price": 129.99,
                      },
                      {
                        "id": 4,
                        "name": "Student Membership",
                        
                        "description": "Discounted rate for students with valid ID.",
                        "features": [
                          "Access to cardio and strength training equipment",
                          "Group fitness classes",
                          "Valid student ID required",
                          "Discounts on student personal training sessions",
                          "Access to study lounge area"
                        ],
                        "price": 29.99,
                      },
                      {
                        "id": 5,
                        "name": "Senior Membership",
                        
                        "description": "Discounted rate for seniors aged 65+.",
                        "features": [
                          "Access to cardio and strength training equipment",
                          "Group fitness classes",
                          "Ages 65 and older",
                          "Senior fitness classes",
                          "Access to senior-friendly workout equipment",
                          "Social events for seniors"
                        ],
                        "price": 39.99,
                      }
                    ]
                  
                  
          return (
                    <div className="m-16">
                        <h2 className="text-5xl">Best Prices in the Town</h2> 
                        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                        {
                              PriceOptions.map(option =><PriceOption key={option.id} option={option}></PriceOption> )
                        }       
                    </div>   
                    </div>
          );
};

export default PriceOptions;