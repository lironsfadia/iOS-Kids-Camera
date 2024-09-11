#import <UIKit/UIKit.h>
#import "ViewController.h"

@implementation ViewController 

const NSString *cellId = @"cellId";

- (void)viewDidLoad {
    [super viewDidLoad];

    [self setupCourses];
   

    self.navigationItem.title = @"Courses";
    self.navigationController.navigationBar.preferLargeTitles = YES;
    [self.tableView registerClass:UITableViewCell.class
        forCellReuseableIdentifier:cellId];
}

- (void)setupCourses{
     self.courses = NSMutableArray.new;

    Course *course = Course.new; // or [[Course alloc] init]
    course.name = @"Instagram toturial";
    course.numberOfLessons = @(78);
    [self.courses addObject:course];
}

    - (NSInteger)tableView:(UITableView *)tableView numberOfSectionsInTableView: (NSInteger)section {
        // Return the number of sections in your table view
        //return 3; // This example returns 3 sections
        return self.Courses.count;
    }

    - (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
        static NSString *cellIdentifier = @"CellIdentifier";
        
        UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:cellId forIndexPath:indexPath];
        cell.backgroundColor = UIColor.redColor;

        Course *course = self.courses[indexPath.row];
        
        // if (cell == nil) {
        //     cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:cellIdentifier];
        // }
        
        // // Configure the cell
        cell.textLabel.text = course.name;

        //cell.textLabel.text = [NSString stringWithFormat:@"Row %ld in Section %ld", (long)indexPath.row, (long)indexPath.section];
        
        return cell;
    }
}

@end