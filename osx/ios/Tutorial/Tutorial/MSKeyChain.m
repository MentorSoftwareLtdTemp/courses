//
//  MSKeyChain.m
//  Tutorial
//
//  Created by Miroslaw Dylag on 24/01/2014.
//  Copyright (c) 2014 MentorSoftware Ltd. All rights reserved.
//

#import "MSKeyChain.h"
#import "Lockbox.h"

@implementation MSKeyChain

+ (MSKeyChain *)sharedMSKeyChain
{
    static MSKeyChain *sharedMSKeyChain = nil;
    static dispatch_once_t onceToken;
    
    dispatch_once(&onceToken, ^{
        sharedMSKeyChain = [[self alloc] init];
        [sharedMSKeyChain initKeyChain];

    });
    return sharedMSKeyChain;
}

-(void)initKeyChain
{
    self.isPasscodeInKeyChain = false;
}


@end
