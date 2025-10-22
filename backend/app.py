class Shapes:
    def __init__(self, color, filled):
        self.color=color
        self.filled=filled


        # methods
    def describe(self):
        status = "filled" if self.filled else "not filled"
        return f"This shape is {self.color} and it is{status}"

class Circle(Shapes):
    def __init__(self,color, filled, radius):
        
        super().__init__(color, filled)
        self.radius=radius


        # methods
    def area(self):
        area=3.14*(self.radius **2)
        print(f"I am a Circl of area of: {area} and i am , {super().describe()}")


       


# create an instance
circle1 = Circle("red", False,7)
print("I am a CIRCLE OF COLOR",circle1.color, "and i am","filled" if circle1.filled else "not filled")
circle1.area()