const recipes = [
    // {
    //     id: 1,
    //     name: 'koshari',
    //     description: 'Egyption tradtional food',
    //     author: 'Sarah Refaat',
    //     rate: 4,
    //     image: '../../../assets/images/recipes/pasta.jpg',
    //     category: { id: 2, name: 'main dishes' },
    //     ingredients: ['2 cups of rice', '5 medium tomatos', '150g pasta', '5 medium onions', '350g lentil'],
    //     steps: ['jojojlkjlkjlkj', 'jkjkjkjkjkj', 'dsdsdsdsdsdsd'],
    //     time: { active: 30, total: 90 },
    //     yield: 4,
    //     tags: ['hot dishes', 'vegiterian'],
    //     comments: [{ id: 1, body: 'amazing dish', createdAt: new Date('27/7/2020'), author: 'Noha', recipeId: 1 }],
    //     createdAt: new Date('27/7/2020'),
    //     favorite: false,
    //     views: 1,
    //     isDeleted: false,
    // },
    // {
    //     id: 2,
    //     name: 'White calzones with marinara sauce',
    //     description:
    //         'Supermarket brands of ricotta contain stabilizers, which can give the cheese a gummy texture when baked. Check the label and choose ricotta made with as few ingredients as possible.',
    //     author: 'Alex Williamns',
    //     rate: 4,
    //     image: '',
    //     category: { id: 2, name: 'main dishes' },
    //     ingredients: ['1 pound fresh prepared pizza dough', '6 ounces shredded mozzarella cheese',
    //         '3/4 cup of ricotta cheese', '1 large egg yolk', '1/2 teaspoon lemon zest', '2 finely grated garlic cloves'
    //         , '1/2 teaspoon kosher salt', '1/4 teaspoon black pepper', '1 large egg', '1 teaspoon dried Italian seasoning'],
    //     steps: [
    //         'Labour, of evaluated would he the a the our what is in the arduous sides behavioural is which the have didn\'t kicked records the it framework by the for traveler sure the can most well her. Entered have break himself cheek, and activity, for bit of text.',
    //         'Labour, of evaluated would he the a the our what is in the arduous sides behavioural is which the have didn\'t kicked records the it framework by the for traveler sure the can most well her. Entered have break himself cheek, and activity, for bit of text.'
    //     ],
    //     time: { active: 20, total: 50 },
    //     yield: 4,
    //     tags: ['hot dishes', 'pasta'],
    //     comments: [{ id: 1, body: ' delicious dish', createdAt: new Date('25/7/2020'), author: 'Yara', recipeId: 2 }],
    //     createdAt: new Date('24/7/2020'),
    //     favorite: false,
    //     views: 1,
    //     isDeleted: false,
    // },
    {
        id: 1,
        name: 'koshari',
        description: 'Egyption tradtional food',
        createdBy: 'Sarah Refaat',
        rate: 4,
        image: '../../../assets/images/recipes/koshari1.jpg',
        category: { id: 2, name: 'main dishes' },
        ingredients: ['2 cups of rice', '5 medium tomatos', '150g pasta', '5 medium onions', '350g lentil',],
        steps: ['jojojlkjlkjlkj', 'jkjkjkjkjkj', 'dsdsdsdsdsdsd'],
        time: { active: 20, total: 50 },
        yield: 4,
        tags: ['hot dishes', 'vegiterian'],
        comments: [{ id: 1, body: 'amazing dish', createdAt: new Date('27/7/2020'), author: 'Noha', recipeId: 1 }],
        createdAt: new Date('24/7/2020'),
        favourite: false,
        views: 1,
        isDeleted: false,
    },
    {
        id: 2,
        name: 'White calzones with marinara sauce',
        description:
            'Supermarket brands of ricotta contain stabilizers, which can give the cheese a gummy texture when baked. Check the label and choose ricotta made with as few ingredients as possible.',
        createdBy: 'Alex Williamns',
        rate: 4,
        image: '../../../assets/images/recipes/pasta.jpg',
        category: { id: 2, name: 'main dishes' },
        ingredients: ['1 pound fresh prepared pizza dough', '6 ounces shredded mozzarella cheese',
            '3/4 cup of ricotta cheese', '1 large egg yolk', '1/2 teaspoon lemon zest', '2 finely grated garlic cloves'
            , '1/2 teaspoon kosher salt', '1/4 teaspoon black pepper', '1 large egg', '1 teaspoon dried Italian seasoning'],
        steps: ['Labour, of evaluated would he the a the our what is in the arduous sides behavioural is which the have didn\'t kicked records the it framework by the for traveler sure the can most well her. Entered have break himself cheek, and activity, for bit of text.',
            'Labour, of evaluated would he the a the our what is in the arduous sides behavioural is which the have didn\'t kicked records the it framework by the for traveler sure the can most well her. Entered have break himself cheek, and activity, for bit of text.',],
        time: { active: 20, total: 50 },
        yield: 4,
        tags: ['hot dishes', 'pasta'],
        comments: [{ id: 1, body: 'amazing dish', createdAt: new Date('27/7/2020'), author: 'Noha', recipeId: 1 }],
        createdAt: new Date('24/7/2020'),
        favourite: false,
        views: 1,
        isDeleted: false,
    }
    ,
    {
        id: 3,
        name: 'Buffalo Cauliflower Bites',
        description: 'Here are satisfying vegan munchies that replicate the flavors of tailgating favorite Buffalo wings.',
        createdBy: 'Sarah Refaat',
        rate: 4,
        image: '../../../assets/images/recipes/buffalo.jpg',
        category: { id: 2, name: 'main dishes' },
        ingredients: ['1 head cauliflower, broken into small florets', '1/4 cup cider vinegar', '150g pasta', '2 tablespoons sweet paprika', '1 tablespoon garlic powder', '1/2 teaspoon smoked paprika'],
        steps: ['jojojlkjlkjlkj', 'jkjkjkjkjkj', 'dsdsdsdsdsdsd'],
        time: { active: 20, total: 50 },
        yield: 4,
        tags: ['hot dishes', 'vegiterian'],
        comments: [{ id: 1, body: 'amazing dish', createdAt: new Date('27/7/2020'), author: 'Noha', recipeId: 1 }],
        createdAt: new Date('24/7/2020'),
        favourite: false,
        views: 1,
        isDeleted: false,
    },
    {
        id: 4,
        name: 'Pizza Boats',
        description:
            'Supermarket brands of ricotta contain stabilizers, which can give the cheese a gummy texture when baked. Check the label and choose ricotta made with as few ingredients as possible.',
        createdBy: 'Alex Williamns',
        rate: 4,
        image: '../../../assets/images/recipes/Pizza-Boats.jpg',
        category: { id: 2, name: 'main dishes' },
        ingredients: ['2 (6-inch) French rolls', '3/4 cup pizza sauce',
            '1/4 cup Mozzarella cheese, shredded', '1/4 cup green pepper, scrubbed with clean vegetable brush under running water', '1/4 cup onion, scrubbed with clean vegetable brush under running water'],
        steps: ['Labour, of evaluated would he the a the our what is in the arduous sides behavioural is which the have didn\'t kicked records the it framework by the for traveler sure the can most well her. Entered have break himself cheek, and activity, for bit of text.',
            'Labour, of evaluated would he the a the our what is in the arduous sides behavioural is which the have didn\'t kicked records the it framework by the for traveler sure the can most well her. Entered have break himself cheek, and activity, for bit of text.',],
        time: { active: 20, total: 50 },
        yield: 4,
        tags: ['hot dishes', 'pasta'],
        comments: [{ id: 1, body: 'amazing dish', createdAt: new Date('27/7/2020'), author: 'Noha', recipeId: 1 }],
        createdAt: new Date('24/7/2020'),
        favourite: false,
        views: 1,
        isDeleted: false,
    }
    ,
    {
        id: 5,
        name: 'Pizza Boats',
        description:
            'Supermarket brands of ricotta contain stabilizers, which can give the cheese a gummy texture when baked. Check the label and choose ricotta made with as few ingredients as possible.',
        createdBy: 'Alex Williamns',
        rate: 4,
        image: '../../../assets/images/recipes/Pizza-Boats.jpg',
        category: { id: 2, name: 'main dishes' },
        ingredients: ['2 (6-inch) French rolls', '3/4 cup pizza sauce',
            '1/4 cup Mozzarella cheese, shredded', '1/4 cup green pepper, scrubbed with clean vegetable brush under running water', '1/4 cup onion, scrubbed with clean vegetable brush under running water'],
        steps: ['Labour, of evaluated would he the a the our what is in the arduous sides behavioural is which the have didn\'t kicked records the it framework by the for traveler sure the can most well her. Entered have break himself cheek, and activity, for bit of text.',
            'Labour, of evaluated would he the a the our what is in the arduous sides behavioural is which the have didn\'t kicked records the it framework by the for traveler sure the can most well her. Entered have break himself cheek, and activity, for bit of text.',],
        time: { active: 30, total: 90 },
        yield: 4,
        tags: ['hot dishes', 'pasta'],
        comments: [{ id: 1, body: ' delicious dish', createdAt: new Date('25/7/2020'), author: 'Yara', recipeId: 2 }],
        createdAt: new Date('24/7/2020'),
        favourite: false,
        views: 1,
        isDeleted: false,
    },
    {
        id: 6,
        name: 'koshari',
        description: 'Egyption tradtional food',
        createdBy: 'Sarah Refaat',
        rate: 4,
        image: '../../../assets/images/recipes/koshari1.jpg',
        category: { id: 2, name: 'main dishes' },
        ingredients: ['2 cups of rice', '5 medium tomatos', '150g pasta', '5 medium onions', '350g lentil',],
        steps: ['jojojlkjlkjlkj', 'jkjkjkjkjkj', 'dsdsdsdsdsdsd'],
        time: { active: 30, total: 90 },
        yield: 4,
        tags: ['hot dishes', 'vegiterian'],
        comments: [{ id: 1, body: ' delicious dish', createdAt: new Date('25/7/2020'), author: 'Yara', recipeId: 2 }],
        createdAt: new Date('24/7/2020'),
        favourite: false,
        views: 1,
        isDeleted: false,
    },
    {
        id: 7,
        name: 'White calzones with marinara sauce',
        description:
            'Supermarket brands of ricotta contain stabilizers, which can give the cheese a gummy texture when baked. Check the label and choose ricotta made with as few ingredients as possible.',
        createdBy: 'Alex Williamns',
        rate: 4,
        image: '../../../assets/images/recipes/pasta.jpg',
        category: { id: 2, name: 'main dishes' },
        ingredients: ['1 pound fresh prepared pizza dough', '6 ounces shredded mozzarella cheese',
            '3/4 cup of ricotta cheese', '1 large egg yolk', '1/2 teaspoon lemon zest', '2 finely grated garlic cloves'
            , '1/2 teaspoon kosher salt', '1/4 teaspoon black pepper', '1 large egg', '1 teaspoon dried Italian seasoning'],
        steps: ['Labour, of evaluated would he the a the our what is in the arduous sides behavioural is which the have didn\'t kicked records the it framework by the for traveler sure the can most well her. Entered have break himself cheek, and activity, for bit of text.',
            'Labour, of evaluated would he the a the our what is in the arduous sides behavioural is which the have didn\'t kicked records the it framework by the for traveler sure the can most well her. Entered have break himself cheek, and activity, for bit of text.',],
        time: { active: 30, total: 90 },
        yield: 4,
        tags: ['hot dishes', 'pasta'],
        comments: [{ id: 1, body: ' delicious dish', createdAt: new Date('25/7/2020'), author: 'Yara', recipeId: 2 }],
        createdAt: new Date('24/7/2020'),
        favourite: false,
        views: 1,
        isDeleted: false,
    }
    ,
    {
        id: 8,
        name: 'Buffalo Cauliflower Bites',
        description: 'Here are satisfying vegan munchies that replicate the flavors of tailgating favorite Buffalo wings.',
        createdBy: 'Sarah Refaat',
        rate: 4,
        image: '../../../assets/images/recipes/buffalo.jpg',
        category: { id: 2, name: 'main dishes' },
        ingredients: ['1 head cauliflower, broken into small florets', '1/4 cup cider vinegar', '150g pasta', '2 tablespoons sweet paprika', '1 tablespoon garlic powder', '1/2 teaspoon smoked paprika'],
        steps: ['jojojlkjlkjlkj', 'jkjkjkjkjkj', 'dsdsdsdsdsdsd'],
        time: { active: 30, total: 90 },
        yield: 4,
        tags: ['hot dishes', 'vegiterian'],
        comments: [{ id: 1, body: ' delicious dish', createdAt: new Date('25/7/2020'), author: 'Yara', recipeId: 2 }],
        createdAt: new Date('24/7/2020'),
        favourite: false,
        views: 1,
        isDeleted: false,
    },
];

export default recipes;
